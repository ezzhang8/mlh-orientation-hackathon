import gradio as gr
from fastai.vision.all import *
import skimage

learn = load_learner('model.pkl')

labels = learn.dls.vocab
def predict(img):
    img = PILImage.create(img)
    pred,pred_idx,probs = learn.predict(img)
    return {labels[i]: float(probs[i]) for i in range(len(labels))}

title = "PLACEHOLDER classifier"
description = "PLACEHOLDER. Created as part of a hackathon for MLH Hackathon Summer 2022"
article="<p style='text-align: center'><a href='https://devpost.com/software/i-spy-but-with-ev-chargers-and-bike-racks' target='_blank'>Blog post</a></p>"
examples = ['27n3FSq.png', 'ePJzE87.png', 'Dqvu6lo.png', '5vp4N7Z.png']
interpretation='default'
enable_queue=True

gr.Interface(fn=predict,inputs=gr.inputs.Image(shape=(512, 512)),outputs=gr.outputs.Label(num_top_classes=3),title=title,description=description,article=article,examples=examples,interpretation=interpretation,enable_queue=enable_queue).launch()