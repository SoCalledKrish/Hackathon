import pickle
import pandas as pd
import re
import matplotlib.pyplot as plt

# Load model and encoders
with open("trained_model.pkl", "rb") as model_file:
    model = pickle.load(model_file)
with open("encoders.pkl", "rb") as enc_file:
    encoders = pickle.load(enc_file)
with open("feature_names.pkl", "rb") as f:
    feature_names = pickle.load(f)

# Load student dataset
df = pd.read_csv("C:/Users/elakiyag/Downloads/student_marks.csv")

# Ensure all marks columns are numeric
df = df.apply(pd.to_numeric, errors='coerce')

# General Recommendations
improvement_tips = [
    "Revise previous exam papers.",
    "Attend doubt-clearing sessions.",
    "Improve time management skills.",
    "Practice mock tests regularly.",
    "Create a study schedule and stick to it.",
    "Seek help from teachers or mentors.",
    "Engage in group studies for better understanding."
]

better_score_tips = [
    "Focus on weak areas identified from the last exam.",
    "Try advanced problems beyond syllabus.",
    "Improve writing speed and answer presentation.",
    "Explore online courses to strengthen concepts.",
    "Use memory techniques like mnemonics.",
    "Stay consistent with revision schedules."
]

# Subject-Specific Recommendations
subject_tips = {
    "Math": "Practice more problems daily to improve speed and accuracy.",
    "Science": "Understand concepts instead of memorizing. Try practical applications.",
    "English": "Improve grammar and vocabulary. Read more books and articles.",
    "History": "Make timeline charts and summarize key events.",
    "Computer": "Practice coding and understand logic-building techniques."
}

def fetch_student_marks(student_id):
    """
    Fetch marks for the given student ID and return only numeric columns.
    """
    student_data = df[df["Student_ID"] == student_id]

    if student_data.empty:
        return None

    student_marks = student_data.iloc[:, 1:].select_dtypes(include=['number'])
    return student_marks


def plot_marks_distribution(student_marks, is_failed=False):
    subjects = list(student_marks.columns[:-2])  # Exclude last two columns (Total and Status)
    marks = student_marks.iloc[0, :-2].fillna(0).astype(int)  # Get subject-wise marks

    total_marks = student_marks.iloc[0, -2]  # Second last column (Total)
    remaining_marks = 500 - total_marks  # Marks left to reach 500

    # Identify the weakest subject if the student failed
    weakest_subject = None
    if is_failed:
        weakest_index = marks.idxmin()  # Get index of lowest mark
        weakest_subject = subjects[list(marks.index).index(weakest_index)]  # Get corresponding subject name
        recommendation = subject_tips.get(weakest_subject, "Focus on your weakest subject with extra practice.")
        print(f"\n⚠️ Your weakest subject is **{weakest_subject}**.")
        print(f"📌 Recommendation: {recommendation}\n")

    # Create a figure with two subplots (1 row, 2 columns)
    fig, axes = plt.subplots(1, 2, figsize=(12, 5))

    # Bar Chart - Subject-wise Marks
    colors = ["red" if subj == weakest_subject else "skyblue" for subj in subjects]
    axes[0].bar(subjects, marks, color=colors, edgecolor="black")
    axes[0].set_xlabel("Subjects")
    axes[0].set_ylabel("Marks")
    axes[0].set_title("Marks Distribution for Student")
    axes[0].set_ylim(0, 100)

    # Add labels on bars
    for i, mark in enumerate(marks):
        axes[0].text(i, mark + 2, str(mark), ha="center", fontsize=12)

    # Pie Chart - Total Marks vs Remaining
    labels = ["Total Marks", "Remaining"]
    values = [total_marks, remaining_marks]
    colors = ["lightcoral", "lightgray"]
    axes[1].pie(values, labels=labels, autopct="%1.1f%%", colors=colors, startangle=140)
    axes[1].set_title("Student Performance")

    # Show both charts
    plt.tight_layout()
    plt.show()


def chatbot_mode():
    try:
        student_id = int(input("Enter Student ID: ").strip())  # Only enter ID, e.g., 3
    except ValueError:
        print("Chatbot: Invalid input. Please enter a numeric Student ID.")
        return

    print(f"Chatbot: Fetching marks for Student ID {student_id}...")

    student_marks = fetch_student_marks(student_id)
    if student_marks is None:
        print("Chatbot: No records found for this ID.")
        return

    print("Selected Features for Prediction:\n", student_marks.head())

    # Check if 'Status' column exists and use it
    if "Status" in student_marks.columns:
        status = student_marks["Status"].values[0]
        if isinstance(status, str):
            print(f"Chatbot: You have {status}! 🎉")
            if status == "Pass":
                print("Chatbot: Here are some tips to improve your scores:")
                print("-", "\n- ".join(better_score_tips))
            else:
                print("Chatbot: Here are some tips to help you pass next time:")
                print("-", "\n- ".join(improvement_tips))
            plot_marks_distribution(student_marks, is_failed=(status == "Fail"))
            return

    # Drop unnecessary columns like 'Status' before prediction
    df_input = student_marks.drop(columns=["Status"], errors="ignore")

    # Make prediction
    prediction_prob = model.predict_proba(df_input)[0]
    prediction = model.predict(df_input)[0]

    print("Prediction Probability (Fail, Pass):", prediction_prob)
    print(f"Chatbot: You have {'passed' if prediction == 'Pass' else 'failed'}.")
    
    if prediction == "Pass":
        print("Chatbot: Here are some tips to achieve better scores:")
        print("-", "\n- ".join(better_score_tips))
    else:
        print("Chatbot: Here are some tips to help you pass next time:")
        print("-", "\n- ".join(improvement_tips))

    plot_marks_distribution(student_marks, is_failed=(prediction == "Fail"))


# Run chatbot once
if __name__ == "__main__":
    chatbot_mode()
