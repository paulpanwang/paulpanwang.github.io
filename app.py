import gradio as gr

# 1. Define the core function
# This can be any Python function, from a simple greeting to a complex machine learning model.
def greet(name):
    return "Hello, " + name + "!"

# 2. Create a Gradio Interface
# 'fn' is your function.
# 'inputs' and 'outputs' define the UI components (e.g., "textbox", "image", "audio").
demo = gr.Interface(
    fn=greet,
    inputs=gr.Textbox(label="Enter your name"),
    outputs=gr.Textbox(label="Greeting")
)

# 3. Launch the app
# This will start a local web server and print the URL.
if __name__ == "__main__":
    demo.launch()