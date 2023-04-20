"""
This module provides an interface to the Hugging Face 
Transformers library, allowing users to easily perform tasks
 such as text generation, sentiment analysis, and named entity recognition.

Usage:
import transformers
from transformers import pipeline

...
"""
from transformers import pipeline
emotion = pipeline('sentiment-analysis', model='arpanghoshal/EmoRoBERTa')
emotion_labels = emotion("I want to die")
FLAG=0




if emotion_labels[0]['label'] == 'anger' and emotion_labels[0]['score'] >= 0.9:
  FLAG=1




if emotion_labels[0]['label'] == 'fear' and emotion_labels[0]['score'] >= 0.65:
  FLAG=1

if emotion_labels[0]['label'] == 'desire' and emotion_labels[0]['score'] >= 0.9:
  FLAG=1
  