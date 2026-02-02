const prisma = require("../prisma/client");

async function createPost(req, res) {
  console.log("BODY POST:", req.body);
  console.log("USER ID DO TOKEN:", req.userId);

  const { title, content } = req.body;

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId: req.userId, 
      },
    });

    return res.status(201).json(post);
  } catch (error) {
    console.log("ERRO POST:", error);
    return res.status(400).json(error);
  }
}

async function listPosts(req, res) {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
      },
    });

    return res.json(posts);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = { createPost, listPosts };
