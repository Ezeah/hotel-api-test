/*import { Request, Response, NextFunction } from 'express';
import { Admin } from 'mongodb';

const authorize = (req: Request, res: Response, next: NextFunction) => {
  // Check if user is admin
  if (req.user && req.user.isAdmin) {
    next(); // User is admin, continue to next middleware or route handler
  } else {
    res.status(401).json({ message: 'Unauthorized' }); // User is not admin, send unauthorized error
  }
};

export default authorize; */

import { Request, Response, NextFunction } from "express";

interface User {
    // Define the user interface, including an optional isAdmin property
    name: string;
    email: string;
    isAdmin?: boolean;
  }
  
  const authorize = (req: Request, res: Response, next: NextFunction) => {
    // Check if user is admin
    const user: User = req.user as User; // Cast the req.user object to the User interface
    if (user && user.isAdmin) {
      next(); // User is admin, continue to next middleware or route handler
    } else {
      res.status(401).json({ message: 'Unauthorized' }); // User is not admin, send unauthorized error
    }
  };
  
  export default authorize;
  