import React from "react";
import { Container, Grid } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
  Cell,
} from "recharts";
import { MdRateReview } from "react-icons/md";
import { MdCompare } from "react-icons/md";

// Example data for the bar chart
const data = [
  { name: "Fair", count: 2 },
  { name: "Okay", count: 3 },
  { name: "Good", count: 5 },
  { name: "Great", count: 6 },
  { name: "Outstanding", count: 10 },
];

// Custom colors for the bars
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];

// Custom TriangleBar shape
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function SingleProfessor() {
  return (
    <div>
      <Container>
        <Grid
          container
          spacing={2}
          style={{
            margin: "50px 0px",
          }}
        >
          <Grid item xs={12} md={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                }}
              >
                4.5
              </span>
              <sup
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                / 5
              </sup>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <span>Overall Ratings Based on 22 students</span>
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                }}
              >
                XYZ
              </span>
              <span>
                Professor in the Mathematics department at ABC University
                Ratings Based on 22 students
              </span>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <button
                style={{
                  backgroundColor: "#303d40",
                  color: "#caccfa",
                  border: "none",
                  padding: "15px 30px",
                  borderRadius: "30px",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <MdRateReview />
                Rate
              </button>
              <button
                style={{
                  backgroundColor: "#303d40",
                  color: "#caccfa",
                  border: "none",
                  padding: "15px 30px",
                  borderRadius: "30px",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <MdCompare />
                Compare
              </button>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            style={{
              height: "50vh",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="count"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div>
              <p>Check out Similar Professors in the Mathematics Department</p>
              <div
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "40px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "50px",
                  backgroundColor: "var(--info-bg)",

                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#303d40",
                      color: "white",
                      padding: "10px",
                      borderRadius: "12px",
                    }}
                  >
                    5.00
                  </div>
                  <div
                    style={{
                      color: "#303d40",
                    }}
                  >
                    Asfand
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#303d40",
                      color: "white",
                      padding: "10px",
                      borderRadius: "12px",
                    }}
                  >
                    5.00
                  </div>
                  <div
                    style={{
                      color: "#303d40",
                    }}
                  >
                    Asfand
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#303d40",
                      color: "white",
                      padding: "10px",
                      borderRadius: "12px",
                    }}
                  >
                    5.00
                  </div>
                  <div
                    style={{
                      color: "#303d40",
                    }}
                  >
                    Asfand
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
