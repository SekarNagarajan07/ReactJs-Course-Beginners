import React from 'react';

function Card({ userName = "john", post = "Not assigned" }) {
  //console.log(props);
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/6804595/pexels-photo-6804595.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quaerat.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {userName}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
