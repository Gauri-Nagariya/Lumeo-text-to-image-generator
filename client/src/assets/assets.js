import logo from './camera.png'
import credit_star from './credit_star.png'
import profile_icon from './profile_icon.png'
import star_icon from './star_icon.png'
import star_group from './star_group.png'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import step_icon_1 from './step_icon_1.png'
import step_icon_2 from './step_icon_2.png'
import step_icon_3 from './step_icon_3.png'
import profile_img_1 from './user_icon.png'
import rating_star from './rating_star.png'
import facebook_icon from './facebook_icon.png'
import instagram_icon from './instagram_icon.png'
import twitter_icon from './twitter_icon.png'
import lock_icon from './lock_icon.png'
import user_icon from './user_icon.png'
import email_icon from './email_icon.png'
import cross_icon from './cross_icon.png'



export const assets = {
  logo,
  profile_img_1,
  step_icon_1,
  step_icon_2,
  step_icon_3,
  // logo_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  star_group,
  rating_star,
  sample_img_1,
  sample_img_2,
  email_icon,
  user_icon,
  lock_icon,
  cross_icon,
  star_icon,
  credit_star,
  profile_icon,
};

export const stepsData = [
  {
    title: "Write Your Vision",
    description:
      "Type a phrase, sentence, or paragraph, and our AI will instantly turn it into a unique image.",
    icon: step_icon_3,
  },
  {
    title: "Watch It Happen",
    description:
      "In moments, our AI takes your description and generates a stunning, personalized image with detail.",
    icon: step_icon_2,
  },
  {
    title: "Download & Share",
    description:
      "Instantly export your design or share it with friends, clients, or the world.",
    icon: step_icon_1,
  },
];

export const testimonialsData = [
  {
    image: profile_img_1,
    name: "Sophia Martinez",
    role: "Content Creator",
    stars: 4,
    text: `I started using this AI Text-to-Image Generator for my YouTube thumbnails, and honestly, it’s a game-changer. The results look professional without me spending hours on design.`,
  },
  {
    image: profile_img_1,
    name: "Ryan Patel",
    role: "Marketing Specialist",
    stars: 4,
    text: `This tool has made my ad campaigns so much more creative. I can generate unique visuals in seconds, and my clients are always impressed with the fresh ideas.`,
  },
  {
    image: profile_img_1,
    name: "Emma Collins",
    role: "Freelance Blogger",
    stars: 5,
    text: `As someone who writes daily blogs, finding the right images was always a headache. Now I just type what I need, and the perfect illustration appears instantly!`,
  },
];

export const plans = [
    {
        id: 'Basic',
        price: 10,
        credits: 100,
        desc: 'Best for personal use.'
    },
    {
        id: 'Advanced',
        price: 50,
        credits: 500,
        desc: 'Best for business use.'
    },
    {
        id: 'Business',
        price: 250,
        credits: 5000,
        desc: 'Best for enterprise use.'
    },
]