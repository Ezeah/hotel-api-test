import { Request, Response } from "express";
import app from "../app";
import authorize from "../interfaces/authorize.interface";

interface User {
    name: string;
    email: string;
    isAdmin: boolean;
  }
  
  const adminUser: User = {
    name: 'Admin',
    email: 'admin@example.com',
    isAdmin: true,
  };
  
  app.get('/admin-only', (req: Request, res: Response) => {
    req.User = adminUser;
    authorize(req, res, () => {
      // Handle admin-only request
      res.send('Admin-only page');
    });
  });
  