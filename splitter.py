from image_slicer import slice

def split_image(picture_name, extension):
    """
    Naively split picture into X parts to use for predictions 
    """
    slice('{}.{}'.format(picture_name, extension), 16)