function getBlogCount(blogs) {
    return blogs.length;
}

function getUserCount(users) {
    return users.length;
}

function getBlogTitle(blogs) {
    return blogs.map(blog => blog.title);
}

function getUserEmail(users) {
    return users.map(user => user.email);
}

function getBlogState (id, blogs) {
    const blog = blogs.find(book => book.id === id);
    const blogState = blog.state
    return blogState;
}

function blogIsInDb(id, blogs) {
    const blog =  blogs.some(blog => blog.id === id);
    if (blog) {
        return true;
    }else {
        throw new Error(`Blog with id ${id} does not exist`);
    }
}

function userIsInDb(id, users) {
    const user =  users.some(user => user.id === id);
    if (user) {
        return true;
    }else {
        throw new Error(`User with id ${id} does not exist`);
    }
}

module.exports = {
    getBlogCount,
    getUserCount,
    getBlogTitle,
    getUserEmail,
    getBlogState,
    blogIsInDb,
    userIsInDb
};