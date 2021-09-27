import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await projectFirestore.collection('posts').doc(id).get();

      if (!response.exists) {
        throw Error("That post doesn't exist");
      }

      post.value = { ...response.data(), id: response.id };
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
