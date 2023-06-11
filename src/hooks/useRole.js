import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../pages/providers/AuthProvider";

const useRole = () => {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/userRole?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRole(data.role);
        setLoading(false);
      });
  }, []);

  return { role };
};

export default useRole;
