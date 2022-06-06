# RockyRoad - MLH Orientation Hackathon w/ Mapillary

## Overview
### Inspiration 💡
We wanted to make something that the Mapillary team could potentially use. We knew that Meta's team heavily used machine learning to semantically segment various parts of the image. However, we noticed that there didn't seem to be a detector for potholes!

### What it does 💻
Given an image, detect if there's a pothole

### How we built it 🔨
Javascript React for the frontend. Hugging Face for the backend, fastai, PyTorch, skimage for the data science

### Challenges we ran into 🧐
Initially, we were going to try making a classifier for bike racks and ev chargers. There weren't any datasets with these two classes on any of the widely known datasets (cityscapes, KITTI, BDD, COCO, etc). However, after talking with the Mapillary team, it turns out that it already does that! So we had to pivot to potholes pretty quickly.  Due to a lack of time, we didn't get to change the methodology on how data was gathered and processed. I'm sure there are much better datasets for potholes than what we ended up using.

## Frontend Deployment

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Backend Deployment
Test app:
https://huggingface.co/spaces/RaymondDashWu/mlh_hackathon_sum22

API:
https://hf.space/embed/RaymondDashWu/mlh_hackathon_sum22/api