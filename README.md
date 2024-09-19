# chatbot
AI chatbot interface implemented in React

This unique AI chatbot interface has the following features:

1. A visually distinct design with a gradient background and rounded message bubbles.
2. The ability to copy AI responses to the clipboard.
3. A smooth scrolling effect to always show the latest message.
4. A gradient submit button for a modern look.
5. Simulated AI responses (which can be replaced with real AI service calls).


Key differences from the ChatGPT interface:

1. Gradient background instead of a plain white background.
2. Rounded, shadowed message bubbles instead of square ones.
3. Purple and blue color scheme instead of green.
4. Copy button directly on AI messages instead of a separate interface.
5. Gradient submit button instead of a plain colored one.


To use this component:

1. Ensure you have Tailwind CSS set up in your project.
2. Install the `lucide-react` package for icons: `npm install lucide-react` or `yarn add lucide-react`.
3. Place this component in your desired location within your Next.js app.


To make this a fully functional AI chatbot, you should:

1. Replace the `getAIResponse` function with a call to an actual AI service API.
2. Implement proper error handling for API calls.
3. Add features like message persistence and user authentication if needed.


This implementation provides a unique look while maintaining the core functionality of an AI chatbot, including the ability to copy responses
