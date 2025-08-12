# AI Music Generation

<div align="center">
    <img src="thumbnail.png" alt="thumbnail">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff" alt="TypeScript">
    <img src="https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white" alt="NextJS">
    <img src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB" alt="React">
    <img src="https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white" alt="TailwindCSS">
    <img src="https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff" alt="ShadCN">
    <img src="https://img.shields.io/badge/BetterAuth-black?logo=BetterAuth" alt="BetterAuth">
    <img src="https://img.shields.io/badge/Polar.sh-black?logo=Polar.sh" alt="Polar">
    <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff" alt="Polar">
    <img src="https://img.shields.io/badge/Modal-black?logo=Modal" alt="Modal">
    <img src="https://img.shields.io/badge/Inngest-black?logo=Inngest" alt="Inngest">
    <img src="https://img.shields.io/badge/Neon-black?logo=Neon&logoColor=008000" alt="Neon">
    <img src="https://custom-icon-badges.demolab.com/badge/AWS-%23FF9900.svg?logo=aws&logoColor=white)" alt="AWS">
</div>          

## Overview
A SaaS application that generates original music using AI. The tool uses a state-of-the-art
music generation model to create songs from simple text descriptions, custom lyrics, or style prompts.
I have built a complete production-ready SaaS with user authentication, a credit-based payment system using Polar.sh,
and background processing queues to handle user load. All service used in this project are free, 
so you won't have to pay anything to follow along. I'll use tech stack such as Next.js 15, React, Typescript, Tailwind CSS,
ShadCN, BetterAuth, Polar, Python, FastAPI, Modal, Inngest, Neon, S3 on AWS, and more.

Features:
- 🎵 AI Music Generation with ACE-Step
- 🧠 LLM-Powered Lyrics & Prompt Generation with Qwen2-7B
- 🖼️ AI Thumbnail Generation with stabilityai/sdxl-turbo
- 🎤 Multiple Generation Modes for descriptions, custom lyrics, or described lyrics
- 🎸 Instrumental Tracks option to generate music without vocals
- ⚡ Serverless GPU Processing with Modal for fast generation
- 📊 Queue System with Inngest for handling generation tasks in background 
- 💳 Credit-Based System
- 💰 Polar.sh Integration for purchasing credit packs
- 👤 User Authentication with BetterAuth
- 🎧 Community Music Feed to discover, play, and like user-generated music
- 🎛️ Personal Track Dashboard to manage, play, and publish songs
- 🐍 Python & FastAPI Backend for music generation logic
- 📱 Modern UI with Next.js, Tailwind CSS & ShadCN UI

## Setup

Follow these steps to install and set up the project

**Clone the Repository**
```bash
git clone https://github.com/conbopk/Music-Generation-SaaS.git
```

**Install Python**

Download and install Python if not already installed. Use the link below for guidance on installation:
[Python Download](https://www.python.org/downloads/)

Create a virtual environment with **Python 3.12.**

## Backend

Navigate to backend folder:
```bash
cd backend
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Modal setup:
```bash
modal setup
```

Run on Modal:
```bash
modal run main.py
```

Deploy backend:
```bash
modal deploy main.py
```

## Frontend

Install dependencies:
```bash
cd frontend
npm i
```

Run:
```bash
npm run dev
```

## Queue

Run the local queue development server with Inngest:
```bash
cd frontend
npx inngest-cli@latest dev
```

## AWS Setup
Policy for frontend user:
```bash
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "VisualEditor0",
			"Effect": "Allow",
			"Action": [
				"s3:GetObject",
				"s3:ListBucket"
			],
			"Resource": [
				"arn:aws:s3:::*/*",
				"arn:aws:s3:::your-bucket-name"
			]
		}
	]
}
```

Policy for backend user:;
```bash
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::*/*",
                "arn:aws:s3:::your-bucket-name"
            ]
        }
    ]
}
```