// solutionData.ts
import React, { ReactNode } from "react";
import { 
  FaRobot, FaChartLine, FaCogs, FaCode, FaNetworkWired, 
  FaPaintBrush, FaBrain, FaShieldAlt, FaLaptopCode, FaMicrophone
} from "react-icons/fa";

export interface Solution {
  title: string;
  description: string;
  bulletPoints: string[];
  icon: ReactNode;
}

export const solutionIcons: ReactNode[] = [
  React.createElement(FaRobot, { size: 40 }),
  React.createElement(FaChartLine, { size: 40 }),
  React.createElement(FaCogs, { size: 40 }),
  React.createElement(FaCode, { size: 40 }),
  React.createElement(FaNetworkWired, { size: 40 }),
  React.createElement(FaPaintBrush, { size: 40 }),
  React.createElement(FaBrain, { size: 40 }),
  React.createElement(FaShieldAlt, { size: 40 }),
  React.createElement(FaLaptopCode, { size: 40 }),
  React.createElement(FaMicrophone, { size: 40 }),
];