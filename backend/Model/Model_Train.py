import pickle
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

# Load dataset
df = pd.read_csv("C:/Users/elakiyag/Downloads/student_marks.csv")  # Replace with actual dataset file

# Define target variable
target_variable = "Status"  # 1 = Pass, 0 = Fail

# Define features (excluding target)
X = df.drop(columns=[target_variable, "Student_ID"])  # Features
y = df[target_variable]  # Target

# Encode categorical data if necessary
encoders = {}
for col in X.columns:
    if X[col].dtype == 'object':
        encoders[col] = LabelEncoder()
        X[col] = encoders[col].fit_transform(X[col])

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save model & encoders
with open("trained_model.pkl", "wb") as model_file:
    pickle.dump(model, model_file)
with open("encoders.pkl", "wb") as enc_file:
    pickle.dump(encoders, enc_file)
with open("feature_names.pkl", "wb") as f:
    pickle.dump(X.columns.tolist(), f)

print("Model trained and saved successfully!")
