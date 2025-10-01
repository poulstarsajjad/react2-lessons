import type { Iblogs } from "../../pages/blogs/Blogs";


function BlogsItem({title , description , image}: Iblogs) {
  return (
    <div className="shadow-md shadow-amber-700 h-[30rem] rounded transition duration-300 hover:brightness-50">
      <img className="rounded-t h-70 w-full" src={image} alt="" />
      <h3 className="text-xl font-bold my-5 px-5">{title}</h3>
      <p className="pb-5 px-5 text-gray-500 line-clamp-2">
        {description}
      </p>
    </div>
  )
}

export default BlogsItem;
