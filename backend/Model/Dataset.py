import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

def load_data(file_path):
    """
    Load CSV or JSON file into a DataFrame.
    """
    if file_path.endswith('.csv'):
        df = pd.read_csv(file_path)
    elif file_path.endswith('.json'):
        df = pd.read_json(file_path)
    elif file_path.endswith('.xlsx'):
        df = pd.read_excel(file_path) 
    else:
        raise ValueError("Unsupported file format. Only CSV and JSON are supported.")
    
    return df

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

def preprocess_data(df, target_column):
    X = df.drop(columns=[target_column])
    y = df[target_column]
    
    # Encoding categorical variables
    encoders = {}
    for col in X.columns:
        if X[col].dtype == 'object':  
            X[col] = X[col].fillna(X[col].mode()[0])  # Fill categorical columns with mode
            encoders[col] = LabelEncoder()
            X[col] = encoders[col].fit_transform(X[col])  # Convert to numeric
        else:
            X[col] = X[col].fillna(X[col].mean())  # Fill numeric columns with mean

    # Splitting the dataset
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    return X_train, X_test, y_train, y_test, encoders  # Return all expected values


# Example usage
if __name__ == "__main__":
    file_path = "C:/Users/elakiyag/Downloads/student_marks.csv"  # Replace with actual file path
    df = load_data(file_path)
    print("Columns in dataset:", df.columns.tolist())
    target_column = 'Status'
    X_train, X_test, y_train, y_test, encoders = preprocess_data(df, target_column)
    print("Preprocessing complete. Ready for model training!")
