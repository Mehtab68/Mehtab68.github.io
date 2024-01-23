# Sun Life Finance Hub (SLFH)
Hackathon Project at ConUHacks for SunLife. Our team decided to do an full stack web app that helps clients with SunLife with their financial decisions. We have implemented numerous calculators that helps clients calculate their mortgage, car payments, loan payments etc. We have also added an AI chat bot that the client can use at any time to communicate with SunLife about their financial questions. We have also added an contact form if the client needs help with a certain insurance.

## Inspiration

The Sun Life Finance Hub (SLFH) was inspired by the need to provide users with a comprehensive financial toolkit. The goal is to empower users to make informed financial decisions, understand the impact of inflation, and gain knowledge through interactive tools and resources.

## What it does

SLFH is a multifaceted digital platform that includes:

### Monthly Budget Visualization

Users can input their income, expenses, and allocate funds to various categories, such as housing, utilities, groceries, entertainment, and miscellaneous expenses. The tool generates interactive doughnut charts for visualizing the budget distribution and provides real-time feedback on the remaining budget.

### Interactive X and Y Graphs

In addition to the doughnut chart, SLFH features interactive x and y graphs. Users can input data points and visualize trends or analyze the correlation between variables.

### Financial Calculators

SLFH offers different types of calculators:

- **Inflation Calculator:** Helps users understand the impact of inflation on their purchasing power over time.
- **Compound Interest Calculator:** Allows users to calculate the future value of an investment with compound interest.
- **Mortgage Calculator:** Assists users in estimating their mortgage payments based on loan amount, interest rate, and term.
- **Debt Repayment Calculator:** Helps users create a plan to repay their debts faster by visualizing different repayment strategies.

### Resource Library

SLFH includes a resource library providing information and articles about inflation, financial planning, and investment strategies. Users can access educational content to enhance their financial literacy.

### Finance Knowledge Quiz

SLFH features a quiz section where users can test their finance knowledge. The quiz covers various topics, including budgeting, investing, and understanding financial terms.

## How we built it

SLFH was built using HTML, CSS, and JavaScript. The financial calculators leverage mathematical formulas to provide accurate results. The resource library integrates articles and content about inflation and financial education.

- **OpenAI ChatGPT API:**
  - We utilized the OpenAI ChatGPT API to enhance user interaction by incorporating a chat interface. Users can ask financial-related questions, seek advice, or engage in discussions about personal finance.

- **Chart.js Library:**
  - For interactive data visualization, we integrated the Chart.js library. The library enables the creation of dynamic and responsive charts, such as the doughnut chart for budget visualization and interactive x and y graphs for data analysis.

## Challenges we ran into

- **Graph Implementation:** Implementing interactive x and y graphs required careful consideration of user input handling and graph rendering.

- **Quiz Design:** Designing a user-friendly and informative finance knowledge quiz presented challenges in creating diverse and engaging questions.

- **Server-Side Implementation:** We faced challenges in implementing a server-side solution to secure the OpenAI ChatGPT API key. The goal was to move the API calls to the server side to prevent exposing the sensitive API key in client-side code.

## Accomplishments that we're proud of

- **Multifunctional Toolkit:** Developing a multifunctional financial toolkit that provides users with various interactive tools and educational resources.

- **Calculator Accuracy:** Ensuring the accuracy of the financial calculators by implementing precise mathematical calculations.

- **Engaging User Experience:** Creating an engaging user experience with interactive graphs, calculators, and a quiz to enhance financial knowledge.

## What we learned

- **Graph Rendering:** Gaining experience in rendering interactive graphs and handling user input for a seamless visual experience.

- **Quiz Development:** Understanding the intricacies of creating an effective and informative quiz to test users' financial knowledge.

- **Server-Side Integration:** Learning about the challenges and importance of server-side integration to secure sensitive API keys.

## What's next for Sun Life Finance Hub (SLFH)

- **Enhanced Graph Features:** Adding additional features to the interactive graphs, such as trendline analysis and data exporting.

- **Expanded Calculator Options:** Introducing more financial calculators to cover a broader range of financial scenarios.

- **Community Interaction:** Implementing features for users to share financial tips, success stories, and participate in discussions.

- **User-Generated Content:** Allowing users to contribute to the resource library by submitting articles and educational content.

- **Integration with Financial APIs:** Exploring the integration of financial APIs to provide real-time market data and investment insights.

- **Secure ChatGPT API Integration:** Addressing security concerns by making the ChatGPT API work online without exposing the API key. Exploring secure methods for handling sensitive information, ensuring user privacy, and providing a seamless chat experience.
