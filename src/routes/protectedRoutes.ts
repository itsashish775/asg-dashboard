import React from "react";
import type { RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { RequireAuth } from "@/components/Auth/RequireAuth";
import CostAndQuota from "@/pages/Cost_Quata";
import UserFeedback from "@/pages/user_feedback";
import RoleManagement from "@/pages/role_management";
import UserManagement from "@/pages/user_management";

export const protectedRoutes: RouteObject = {
  element: React.createElement(RequireAuth), // 👈 wrapper
  children: [
    {
      path: "dashboard",
      element: React.createElement(Dashboard),
    },
    {
      path: "cost-and-quota",
      element: React.createElement(CostAndQuota),
    },
    {
      path: "role-management",
      element: React.createElement(RoleManagement),
    },
    {
      path: "user-management",
      element: React.createElement(UserManagement),
    },
    {
      path: "user-feedback",
      element: React.createElement(UserFeedback),
    },
  ],
};
