Practice 12 Deployment

Platform Used: Render

Code Changes:
- Modified server.js to use an environment variable using process.env.GREETING
- Created a new endpoint /api/message that returns the environment variable value as JSON
- Added a fallback message in case the environment variable is not set

Environment Variable Setup:
- Key: GREETING
- Value: Hello from Render!
- Configured in Render dashboard under Environment Variables

Deployment Steps:
1. Updated server.js with environment variable logic
2. Committed and pushed changes to GitHub
3. Opened Render dashboard and selected existing web service
4. Added environment variable GREETING in Render settings
5. Redeployed application using Manual Deploy
6. Verified deployment by visiting /api/message endpoint

Result:
- The endpoint returns: {"message":"Hello from Render!"}

Issues Encountered:
- Initial deployment showed default message until environment variable was added and service was redeployed
- Result:
- The endpoint returns: {"message":"Hello from Render!"}

Live URL:
https://practice11-r7qm.onrender.com
https://practice11-r7qm.onrender.com/api/message
