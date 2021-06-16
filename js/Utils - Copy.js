var Utils = {
    // getScaleFactor: function(expectWidth, baseWidth) {
    //     let newScale = expectWidth / baseWidth;
    //     return newScale;
    // },

    SpriteSettingsControl: function(_this, posX, posY, imageName, anchorX = null, anchorY = null, scaleX = null, scaleY = null, isInputEnabled = false, OnInputDownEvent = null, OnInputUpEvent = null, OnInputHoverEvent = null, OnInputOutEvent = null) {
        var tempImage = _this.add.image(posX, posY, imageName);
        if (anchorX != null && anchorY != null) {
            tempImage.setOrigin(anchorX, anchorY);
        } else {
            tempImage.setOrigin(0, 0);
        }
        if (scaleX != null && scaleY != null) {
            tempImage.setScale(scaleX, scaleY);
        }
        if (isInputEnabled) {
            tempImage.setInteractive({ useHandCursor: true });
        }
        if (OnInputDownEvent != null)
            tempImage.on("pointerdown", OnInputDownEvent);
        if (OnInputHoverEvent != null)
            tempImage.on("pointerover", OnInputHoverEvent);
        if (OnInputOutEvent != null)
            tempImage.on("pointerout", OnInputOutEvent);
        if (OnInputUpEvent != null)
            tempImage.on("pointerup", OnInputUpEvent);
        return tempImage;
    },
}