import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-2xl shadow-lg bg-gray-300 max-w-md mx-auto text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4076/4076432.png"
                    alt="No Posts"
                    className="w-20 h-20 mb-4 opacity-80"
                  />
                  <h3 className="text-2xl font-bold text-gray-800">
                    No Posts Yet
                  </h3>
                  <p className="text-gray-600 mt-2">
                    It looks empty here! Add some posts or log in to explore
                    more.
                  </p>
                  <Link
                    to="/login"
                    className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-700 transition duration-300"
                  >
                    Login to Add Posts
                  </Link>
                </div>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8 ">
      <Container>
        <div className="flex flex-wrap ">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4 ">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
