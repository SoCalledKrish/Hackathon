import pandas as pd
import joblib  # For saving the trained model
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from Dataset import load_data, preprocess_data  # Importing functions from dataset.py

# Load dataset
file_path =  "C:/Users/elakiyag/Downloads/university_resource_allocation.xlsx" # Update file path
df = load_data(file_path)

# Select target variable
print("Columns in dataset:", df.columns.tolist())
target_column = input("Enter the target variable: ")

# Preprocess data
X_train, X_test, y_train, y_test, encoders = preprocess_data(df, target_column)

# Determine if the problem is classification or regression
if y_train.dtype == 'O' or df[target_column].nunique() < 10:  # If target is categorical or has few unique values
    model = RandomForestClassifier()
    print("Training a classification model...")
else:
    model = RandomForestRegressor()
    print("Training a regression model...")

# Train model
model.fit(X_train, y_train)

# Evaluate model
accuracy = model.score(X_test, y_test)
print(f"Model accuracy (R² for regression, accuracy for classification): {accuracy:.4f}")

# Save model
joblib.dump(model, "trained_model.pkl")
print("Model saved as trained_model.pkl")
