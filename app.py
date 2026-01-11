import joblit as jl
import streamlit as st
from utils.data_processing import process_data
from utils.model_training import train_model
from utils.visualization import plot_results
from utils.evaluation import evaluate_model
from utils.data_loading import load_data

@jl.app
def main():
    st.title("Data Science Application")

    # Load data
    data = load_data("data/sample_data.csv")
    st.write("Data Loaded Successfully")

    # Process data
    processed_data = process_data(data)
    st.write("Data Processed Successfully")

    # Train model
    model = train_model(processed_data)
    st.write("Model Trained Successfully")

    # Evaluate model
    evaluation_results = evaluate_model(model, processed_data)
    st.write("Model Evaluation Results:", evaluation_results)

    # Plot results
    plot_results(evaluation_results)
    st.write("Results Plotted Successfully")
    st.pyplot()
if __name__ == "__main__":
    main()
    