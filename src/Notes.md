The agenda of this project is to learn how to build YouTube clone, along with how to approach machine coding interviews.

In a machine coding interview, the steps which should be followed are:

1. Requirement clarification: 

    Clarify with the interviewer as to what all features of the web app need to be built during the interview or assessment. 

2. Tech Stack Discussion:

    Discuss with the interviewer, what tech stack we'll use to build the app, along with justification. As an example, for the YouTube clone app, we'll use:

    - Redux: because for large front-end web apps, Redux makes data management easy.

    - Tailwind CSS: because it helps in speedy development of the app

    - React Router DOM: For routing and navigation in the app

    - Bundler: Webpack if using create-react-app

    - Testing Libraries: Jest, React Testing Library

    Spend ~5 minutes in this discussion.

3. Planning Stage: 

    Low Level Design in this stage. How to structure the components, how to manage the UI and data layer etc. 

    As an example, for YouTube app, the LLD could be:

    YouTube HomePage

    - Header
        - Hamburger icon
        - YouTube logo
        - Search Bar
        - Profile Photo

    - Body
        - Side Bar
            - Menu Item * n
        - Main Container
            - Button List
                - Video Category Button * n
            - Video Container
                - Video Card * n

    After clicking on a video card, it takes to a new page '/watch'.

    HLD for the '/watch' page:

    - Header
        - Hamburger icon
        - YouTube logo
        - Search Bar
        - Profile Photo
    
    - Body
        - Side Bar
            - Menu Item * n

        - WatchVideo

    After formulating the LLD, discuss with the interviewer, to make sure that they are on the same page.

In a machine coding interview, it's better to go ahead with a create-react-app than building and setting things up from scratch. This is because it helps in speedy development. We can tell the same to the interviewer as well.

4. Development :

    - Setting up Tailwind CSS in the React app

    - Start by making a basic skeleton of the app with the help of LLD made in the last step. This can include just making components with a placeholder content.

    - Give styling to these components, one-by-one, and make them look good.

    - Let's now think of the toggle sidebar functionality on click of hamburger icon. How can we do that? We can use a state variable to toggle that. But, it's interesting to note that the Header component (having hamburger icon) and the sidebar do not have a parent-child relationship. So, we can work on storing the state 'isSidebarOpen' globally in the Redux store. It's a good decision as the toggle functionality can be present at different places across the app.

    - Setup Redux in the app






    - Install React Router DOM


    
