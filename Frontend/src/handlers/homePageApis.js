import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const getFAQ = async () => {
  try {
    const res = await fetch(`${BASE_URL}/faq`);
    return res.json();
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
  }
};

export const getGuidedLessons = async () => {
  try {
    const res = await fetch(`${BASE_URL}/guidedLessons`);
    return res.json();
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
  }
};

// export const getMeditationMusic = async () => {
//     try {
//         const res = await fetch('http://localhost:3000/meditationMusic');
//         return res.json();
//     } catch (error) {
//         console.error('Error fetching FAQ data:', error);
//     }
//     };

export const getuserDetails = async (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const userId = decodedToken._id;

    // Make GET request to the server with credentials included
    const res = await axios.get(`${BASE_URL}/user/${userId}`, {
      headers: { "auth-token": token },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};
