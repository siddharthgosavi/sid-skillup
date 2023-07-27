import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import { Link, useParams } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import CommentsForm from './CommentsForm';
import CommentItem from './CommentItem';

const Post = ({ getPost, post: { post, loading } }) => {
  const params = useParams();
  useEffect(() => {
    getPost(params.id);
  }, [getPost, params.id]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link
        to="/posts"
        className="btn"
      >
        Back to all Posts
      </Link>
      <PostItem
        post={post}
        showActions={false}
      />
      <CommentsForm postId={post._id} />
      <div className="comment">
        {post.comments.map((comment) => (
          <CommentItem
            key={comment._id}
            comment={comment}
            postId={post._id}
          />
        ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPost })(Post);
