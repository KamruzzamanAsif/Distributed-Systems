import Navbar from "../components/navbar";
import Post from "../components/post";
import AddPost from "../components/addPost"

const posts = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      content: {
        text: 'Hello, this is my first post with text and image!',
        image: 'https://images.unsplash.com/photo-1688870559348-bfbad318db1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=845&q=80',
      },
    },
    {
      id: 2,
      user: {
        name: 'Jane Doe',
        profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      content: {
        text: 'This is a text-only post.',
      },
    },
    // Add more posts here...
  ];
  

const Home = () =>{
    return(
        <>
            <Navbar />

            <div className="bg-[#f4f4f5]">
                <main className="container mx-auto p-4">
                <AddPost/>

                {posts.map((post) => (
                <Post
                    key = {post.id}
                    user={post.user}
                    content={post.content}
                />
                ))}
                </main>
            </div>
            
        
        </>
    );
}

export default Home;