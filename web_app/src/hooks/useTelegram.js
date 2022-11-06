export const tg = window.Telegram.WebApp;


export const useTelegram = () => {
    const onClose = () => {
        console.log('close');
        tg.close();
    };

    const toggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }

    return {
        tg,
        onClose,
        toggleButton,
        user: tg.initDataUnsafe?.user,
    }
}

