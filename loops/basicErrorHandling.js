try {
    //Trying to use an undefined variable
    console.log(userName.toUpperCase());
} catch (error) {
    console.error("Oops! Something went wrong:", error.message);
}