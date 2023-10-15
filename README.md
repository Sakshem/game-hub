# [Game Hub](https://game-hub-sakshem.vercel.app/)

[Game Hub](https://game-hub-sakshem.vercel.app/) is a React-based website deployed on Vercel that provides a comprehensive collection of games from the official API of RAWG (Video Games Database). It offers an intuitive and user-friendly interface where users can explore and discover various games in a card format.

## Features

- **Game Cards**: The website showcases games in card format, allowing users to browse through the extensive collection easily. Each card provides essential information such as the game's title, cover image, available platforms, user ratings, and more.

- **Search Functionality**: Users can search for specific games using the search feature. Simply type in the game's title, and the website will display relevant results.

- **Platform and Genre Filtering**: Game Hub offers convenient filtering options to help users find games based on specific platforms or genres. By clicking on the respective buttons, users can narrow down their search results and explore games tailored to their preferences.

- **Responsive Design**: The user interface of Game Hub is designed to be compatible with various devices, including laptops, tablets, and mobile phones. Users can seamlessly access and navigate the website from their preferred devices.

## Technologies Used

- **React 18**: Game Hub is built using React, a popular JavaScript library for building user interfaces. React 18 provides a powerful foundation for creating dynamic and interactive components.

- **Chakra UI**: The front end of the website is styled using Chakra UI, a customizable and accessible component library for React. Chakra UI offers a wide range of pre-designed components that enhance the visual appeal and user experience of the website.

- **Vercel**: The website is deployed on Vercel, a cloud platform for static sites and serverless functions. Vercel provides a seamless deployment experience, ensuring that the website is accessible to users at all times.

- **RAWG API**: Game Hub utilizes the official API provided by RAWG (Video Games Database) to fetch data about games. The API enables the website to retrieve game details such as platforms, ratings, genres, and more, ensuring that users have access to comprehensive information.

## Deployment

The Game Hub website is deployed on Vercel and can be accessed at https://game-hub-sakshem.vercel.app/. Feel free to visit the website and explore the extensive collection of games from around the world.

Please note that certain features of the website may rely on the availability and stability of the RAWG API. If you encounter any issues, such as missing data or slow loading times, it is recommended to check the status of the RAWG API or contact the project maintainer.

# Project Setup with Docker Compose

## Prerequisites

Before you start, make sure you have the following prerequisites installed on your system:

- **Docker**: You can download and install Docker from [Docker's official website](https://www.docker.com/get-started).

- **Docker Compose**: Ensure you have Docker Compose installed. It's typically included with Docker on most platforms.

## Getting Started

1. **Clone the Repository**: Clone this project's repository to your local machine.

    ```bash
    git clone https://github.com/Sakshem/game-hub.git
    cd game-hub
    ```

2. **Build and Start Containers**:
    - To build and start the project containers, run:

    ```bash
    docker-compose up -d
    ```

    The `-d` flag runs containers in the background.

3. **Accessing the Application**:
    - Once the containers are up and running, you can access your application in a web browser 
    ```bash
    http://localhost:5173/
    ```

4. **Stopping the Containers**:
    - To stop and remove the containers, run:

    ```bash
    docker-compose down
    ```

    This will stop and remove the containers, but it will not delete the images and volumes. Use `docker-compose down -v` to remove volumes as well.

This README section provides a basic setup guide for building your project using Docker Compose.