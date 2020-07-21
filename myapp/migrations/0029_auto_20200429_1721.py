# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0028_auto_20200429_1353'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='orderstatus',
            field=models.CharField(verbose_name='订单状态', max_length=32, default='未支付', choices=[('未支付', '未支付'), ('已支付', '已支付'), ('订单取消', '订单取消'), ('已收货', '已收货')]),
        ),
    ]
