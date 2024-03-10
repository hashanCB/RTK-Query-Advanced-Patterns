"use client";
import Image from "next/image";
import {
  useGetPetQuery,
  useGetuseridQuery,
  useAddPostMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "./APIService";
import Link from "next/link";

export default function Home() {
  const [updateuser] = useUpdateUserMutation();
  const { data, error, isLoading } = useGetPetQuery(1);
  const [adddata] = useAddPostMutation();
  const [deleteuser] = useDeleteUserMutation();
  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
  } = useGetuseridQuery(3);
  //console.log(data);
  return (
    <>
      <Link href="/about">about</Link>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <p className=" bg-yellow-300 text-black px-8 max-h-max flex items-center rounded-full border-current  ">
        {" "}
        All user{" "}
      </p>
      {data &&
        data.map((items, index) => (
          <div key={items.id}>
            <p>{items.name}</p>
            <p>{items.email}</p>
            <p>
              <br />
            </p>
            {/* <Image
              src={items.image}
              width={200}
              height={200}
              alt={items.title}
            /> */}
          </div>
        ))}

      <p className=" bg-yellow-300 text-black px-8 max-h-max flex items-center rounded-full border-current  ">
        Get user infomation
      </p>
      {isLoading2 && <p>Loading...</p>}
      {error2 && <p>Error: {error2.message}</p>}
      {data2 && (
        <div key={data2.id}>
          <p>{data2.name}</p>
          <p>{data2.email}</p>
          <p>
            <br />
          </p>
          {/* <Image
              src={items.image}
              width={200}
              height={200}
              alt={items.title}
            /> */}

          <p className=" bg-yellow-300 text-black px-8 max-h-max flex items-center rounded-full border-current  ">
            Get user infomation
          </p>

          <button
            onClick={() =>
              adddata({ name: "tcccest", email: "dfgdfg@gmail.com" })
            }
          >
            Add
          </button>

          <p className=" bg-yellow-300 text-black px-8 max-h-max flex items-center rounded-full border-current  ">
            update infometion
          </p>
          <button
            onClick={() =>
              updateuser({
                id: "ccf567ab-1161-4692-b728-988495993da1",
                name: "new",
                email: "new@hashan.com",
              })
            }
          >
            Update
          </button>

          <p className=" bg-yellow-300 text-black px-8 max-h-max flex items-center rounded-full border-current  ">
            deleted infometion
          </p>
          <button
            onClick={() => deleteuser("ccf567ab-1161-4692-b728-988495993da1")}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}
