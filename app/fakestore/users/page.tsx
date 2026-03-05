import { getAllUsers } from "@/lib/fakestoreApi";

interface AllUsers {
  id: number;
  username: string;
  email: string;
  password: string;
}

export default async function AllUsers() {
  const allUsers: AllUsers[] = await getAllUsers();

  console.log(allUsers);

  return (
    <main className="">
      <section className="max-w-2xl mx-auto py-16">
        <h1 className="text-2xl font-semibold mx-auto text-center mb-7">Users List</h1>

        <div className="w-full  border rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead className="">
              <tr className="border-b text-left">
                <th className="p-2 ">ID</th>
                <th className="p-2 ">Username</th>
                <th className="p-2">Email</th>
                <th className="p-2">Password</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => (
                <tr className="border-b last:border-none" key={user.id}>
                  <td className="p-2 text-center">{user.id}</td>
                  <td className="p-2 pr-10">{user.username}</td>
                  <td className="p-2 pr-10">{user.email}</td>
                  <td className="p-2 pr-10">{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
