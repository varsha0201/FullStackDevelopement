from rest_framework import serializers

from .models import Product

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.ImageField(
         max_length=200, allow_empty_file= False, allow_null=True, required=False)
        
    class Meta:
        model = Product
        fields = "__all__"
        # fields = ('id', 'name', 'description', 'price', 'image', ' category')