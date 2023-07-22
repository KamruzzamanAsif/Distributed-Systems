import Navbar from "../components/navbar";
import Post from "../components/post";
import AddPost from "../components/addPost"


  

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