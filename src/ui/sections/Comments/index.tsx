// Constants
import { mada, FONT_SIZE, FONT_WEIGHT, TYPE } from '@/constants';

// Interfaces
import { IComments } from '@/interfaces';

// Libs
import { getComments } from '@/libs';

// Components
import { Typography, Card } from '@/ui/components';

const CommentsSection = async () => {
  const { data: comments, error: commentsError } = await getComments();
  return (
    <section className="my-20 container">
      <Typography
        fontWeight={FONT_WEIGHT.BOLD}
        className={`${mada.className} my-4 text-center`}
        size={FONT_SIZE.MEDIUM}
      >
        Testimonials
      </Typography>
      <div className="mt-8 xl:flex justify-center gap-6">
        {commentsError ? (
          <i className="text-red-400">
            Error fetching comments, Please try again later!
          </i>
        ) : (
          <div className="mt-8 xl:flex justify-center gap-6">
            {comments.map((item: IComments) => (
              <div key={item.id} className="w-full mt-4  flex justify-center">
                <Card
                  photo={item.avatar}
                  name={item.name}
                  variant={TYPE.COMMENT}
                  comment={item.comment}
                  width={48}
                  height={48}
                  role={item.role}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CommentsSection;
