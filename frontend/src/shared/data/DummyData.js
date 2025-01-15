// src/shared/data/DummyData.js

// TODO: Remove dummy data
export const newsItems = [
  {
    id: 1,
    title: "Breaking News: Technology Trends 2024",
    image: "https://picsum.photos/200/300?random=1",
    intro: "Discover the top technology trends set to revolutionize 2024.",
    body: "As we move into 2024, the tech industry is buzzing with innovation. From AI advancements to green technologies, these trends will shape our future...",
    date: "2024-12-23T18:25:43.511Z",
    writerId: 1,
  },
  {
    id: 2,
    title: "Health Insights: Benefits of Regular Exercise",
    image: "https://picsum.photos/200/300?random=2",
    intro:
      "Explore the physical and mental benefits of incorporating exercise into your daily routine.",
    body: "Regular exercise has been proven to improve cardiovascular health, reduce stress, and enhance overall well-being. Learn how to start...",
    date: "2024-12-22T16:00:00.000Z",
    writerId: 2,
  },
  {
    id: 3,
    title: "Travel Guide: Top 10 Destinations for 2024",
    image: "https://picsum.photos/200/300?random=3",
    intro:
      "Plan your next adventure with our list of the top 10 destinations for 2024.",
    body: "From the beaches of Bali to the cultural hubs of Europe, these destinations offer unique experiences and breathtaking sights...",
    date: "2024-12-21T10:30:00.000Z",
    writerId: 3,
  },
  {
    id: 4,
    title: "Financial Tips: Saving for the Future",
    image: "https://picsum.photos/200/300?random=4",
    intro: "Secure your financial future with these expert savings tips.",
    body: "Planning ahead financially is crucial for long-term security. This guide provides actionable tips to save and invest wisely...",
    date: "2024-12-20T08:15:00.000Z",
    writerId: 1,
  },
  {
    id: 5,
    title: "Sports Update: Championship Results",
    image: "https://picsum.photos/200/300?random=5",
    intro: "Catch up on the latest results from the championship finals.",
    body: "The championship finals concluded with thrilling performances and unexpected victories. Here’s a breakdown of the highlights...",
    date: "2024-12-19T19:45:00.000Z",
    writerId: 2,
  },
  {
    id: 6,
    title: "Science Breakthroughs: New Discovery in Space",
    image: "https://picsum.photos/200/300?random=6",
    intro: "A groundbreaking discovery in space has scientists excited.",
    body: "Astronomers have unveiled a new celestial phenomenon that could redefine our understanding of the universe. Here's what you need to know...",
    date: "2024-12-18T14:00:00.000Z",
    writerId: 3,
  },
  {
    id: 7,
    title: "Local News: Community Garden Project",
    image: "https://picsum.photos/200/300?random=7",
    intro: "Residents come together to create a vibrant community garden.",
    body: "A community garden project has brought neighbors closer and created a beautiful green space. Learn about the project’s impact...",
    date: "2024-12-17T09:00:00.000Z",
    writerId: 1,
  },
  {
    id: 8,
    title: "Entertainment: Movie Releases This Month",
    image: "https://picsum.photos/200/300?random=8",
    intro: "Check out the most anticipated movie releases for December.",
    body: "This month’s lineup features blockbuster hits and indie gems. From action-packed thrillers to heartfelt dramas, there’s something for everyone...",
    date: "2024-12-16T20:15:00.000Z",
    writerId: 2,
  },
  {
    id: 9,
    title: "Education: Tips for Effective Online Learning",
    image: "https://picsum.photos/200/300?random=9",
    intro: "Master the art of online learning with these helpful tips.",
    body: "Online learning can be challenging, but with the right strategies, it’s highly rewarding. Here are some techniques to enhance your experience...",
    date: "2024-12-15T11:30:00.000Z",
    writerId: 3,
  },
  {
    id: 10,
    title: "Environment: Reducing Plastic Waste",
    image: "https://picsum.photos/200/300?random=10",
    intro:
      "Learn how to reduce your plastic waste and protect the environment.",
    body: "Plastic pollution is a major global issue. Discover practical ways to minimize waste and contribute to a healthier planet...",
    date: "2024-12-14T17:45:00.000Z",
    writerId: 1,
  },
];

export const banners = [
  {
    id: 1,
    src: "https://picsum.photos/200/300",
    alt: "Banner 1",
    title: "Banner Title 1",
    link: "/news/1",
  },
  {
    id: 2,
    src: "https://picsum.photos/200/300",
    alt: "Banner 2",
    title: "Banner Title 2",
    link: "/news/2",
  },
  {
    id: 3,
    src: "https://picsum.photos/200/300",
    alt: "Banner 3",
    title: "Banner Title 3",
    link: "/news/3",
  },
];

// Dummy users data
export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123", // Note: In a real application, passwords should be hashed
    avatar: "https://picsum.photos/50/50",
    role: "user",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password123", // Note: In a real application, passwords should be hashed
    avatar: "https://picsum.photos/50/50",
    role: "admin",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "password123", // Note: In a real application, passwords should be hashed
    avatar: "https://picsum.photos/50/50",
    role: "owner",
  },
];

//TODO: NotSecure please remove it
export const createUser = (user) => {
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  newUser.id = id;
  users.push(newUser);
  return newUser;
};

export const readUser = (id) => {
  return users.find((user) => user.id === id);
};

export const updateUser = (id, updateUser) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updateUser };
    return users[index];
  }
  return null;
};

export const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    return deletedUser[0];
  }
  return null;
};
