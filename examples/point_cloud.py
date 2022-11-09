import logging

from cloudnative_datasets import CloudObject
from cloudnative_datasets.geospatial import LiDARPointCloud


# logging.basicConfig(level=logging.DEBUG)


def main():
    config = {
        'aws_access_key_id': 'minioadmin',
        'aws_secret_access_key': 'minioadmin',
        'region_name': 'us-east-1',
        'endpoint_url': 'http://192.168.1.110:9000',
        's3_config_kwargs': {
            'signature_version': 's3v4'
        }
    }

    co = CloudObject.from_s3(LiDARPointCloud, 's3://geospatial/laz/cnig/PNOA_2016_CAT_324-4570_ORT-CLA-COL.laz',
                             s3_config=config)
    co.fetch()

    preprocessed = co.is_preprocessed()
    print(preprocessed)
    if not preprocessed:
        co.preprocess()


if __name__ == '__main__':
    main()
