const initState = {
    blogs: [{
        id: '1',
        title: 'First BLOG',
        body: 'my first blog',
        author: 'badreddine'
    },{
        id: '2',
        title: 'Second BLOG',
        body: 'my second blog',
        author: 'badreddine'
    }]
};

const rootreducer = (state = initState, action) => {
    return state;
}

export default rootreducer;