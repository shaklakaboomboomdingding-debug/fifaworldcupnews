import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API Routes ---

  // Mock Data
  const MOCK_NEWS = [
    {
      id: "1",
      title: "USA Confirmed to Host Opening Match in 2026",
      summary: "The United States will kick off the tournament with a spectacular opening ceremony in Los Angeles.",
      category: "News",
      imageUrl: "https://images.unsplash.com/photo-1518605368461-1e1272787834?q=80&w=2670&auto=format&fit=crop",
      date: new Date().toISOString(),
      author: "FIFA Hub"
    },
    {
      id: "2",
      title: "Tactical Analysis: Defending Champions Argentina",
      summary: "An in-depth look at how Argentina is preparing to defend their title across North America.",
      category: "Analysis",
      imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2670&auto=format&fit=crop",
      date: new Date(Date.now() - 86400000).toISOString(),
      author: "Tactics Expert"
    },
    {
      id: "3",
      title: "Mbappe Set to Lead France's Charge",
      summary: "Kylian Mbappe has stated his singular goal of returning the trophy to France.",
      category: "Players",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2670&auto=format&fit=crop",
      date: new Date(Date.now() - 172800000).toISOString(),
      author: "Paris Bureau"
    }
  ];

  const MOCK_MATCHES = [
    {
      id: "m1",
      team1: { name: "USA", code: "USA", flag: "🇺🇸", score: null },
      team2: { name: "TBD", code: "TBD", flag: "🏳️", score: null },
      status: "Scheduled",
      time: "2026-06-11T19:00:00Z",
      stadium: "Los Angeles Stadium",
      group: "Group A"
    },
    {
      id: "m2",
      team1: { name: "Mexico", code: "MEX", flag: "🇲🇽", score: null },
      team2: { name: "TBD", code: "TBD", flag: "🏳️", score: null },
      status: "Scheduled",
      time: "2026-06-12T16:00:00Z",
      stadium: "Estadio Azteca",
      group: "Group B"
    },
     {
      id: "m3",
      team1: { name: "Canada", code: "CAN", flag: "🇨🇦", score: null },
      team2: { name: "TBD", code: "TBD", flag: "🏳️", score: null },
      status: "Scheduled",
      time: "2026-06-13T20:00:00Z",
      stadium: "BMO Field",
      group: "Group C"
    }
  ];

  app.get("/api/news", (req, res) => {
    res.json(MOCK_NEWS);
  });

  app.get("/api/matches", (req, res) => {
    res.json(MOCK_MATCHES);
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // --- Vite Middleware ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Support Express 4 fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
