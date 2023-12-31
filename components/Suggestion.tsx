import Comments from "./Comments";
import Upvote from "./Upvote";

export default function Suggestion() {
  return (
    <div className="bg-white rounded-lg mt-5 p-5">
      <div className="order-first col-span-8">
        <h2 className="bold-13">Add tags for solutions</h2>
        <p className="text-[13px] text-647 my-3">
          Easier to search for solutions based on a specific stack.
        </p>
        <div className="sugg-type">Enhancement</div>
      </div>

      <div className="flex justify-between mt-5">
        <Upvote />
        <Comments />
      </div>
    </div>
  );
}