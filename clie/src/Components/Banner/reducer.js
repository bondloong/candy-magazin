export const initialState = {
    count: 0,
    banners: [
        'https://avatars.mds.yandex.net/get-zen_doc/1811900/pub_5dc14258e4f39f00af11c916_5dc14269fc69ab00aef7f3a8/scale_1200',
        'http://design.laycode.ru/sources/img/baners.jpg',
    ]
};

export default function(state, action) {
    switch (action.type) {
        case 'next':
            return nextBanner(state.count);
        case 'pred':
            return predBanner(state.count);
        default:
            throw new Error()
    }
}

const nextBanner = (count) => {
    if (count < initialState.banners.length - 1) {
        return { count: count + 1 }
    } else {
        return { count: initialState.count }
    }
}

const predBanner = (count) => {
    if (count <= initialState.count) {
        return { count: initialState.banners.length - 1 }
    } else {
        return { count: count - 1 }
    }
}