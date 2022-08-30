import Avatar from "../components/Avatar/Avatar";

export default{
    title: 'OtroComponente/Avatar',
    component: Avatar
}

const Template = (args) => <Avatar {...args} />;

export const Small = Template.bind({});

Small.args = {
    size: 'small',
    src: 'https://images.hdqwalls.com/wallpapers/bthumb/girl-in-glasses-looking-back-4k-un.jpg'
}

export const Medium = Template.bind({});

Medium.args = {
    size: 'medium',
    src: 'https://images.hdqwalls.com/wallpapers/bthumb/girl-in-glasses-looking-back-4k-un.jpg'
}

export const Large = Template.bind({});

Large.args = {
    size: 'large',
    src: 'https://images.hdqwalls.com/wallpapers/bthumb/girl-in-glasses-looking-back-4k-un.jpg'
}


