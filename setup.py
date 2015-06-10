# -*- coding: utf-8 -*-

import os
import re
from setuptools import setup, find_packages

here = os.path.dirname(__file__)
with open(os.path.join(here, 'src', 'matchbox', '__init__.py')) as v_file:
    package_version = re.compile(r".*__version__ = '(.*?)'", re.S).match(v_file.read()).group(1)


def read(fname):
    return open(os.path.join(here, fname)).read()

requirements = []

test_requires = [
    'pytest',
    'pytest-cov'
]

extras_require = {
    'docs': ['sphinx'],
    'tests': test_requires
}

setup(
    name='matchbox',
    version=package_version,
    description='Abstraction layer for creating indexes to speed up extracting subsets out of objects collections',
    long_description=(
        read('README.rst') + '\n\n' + read('CHANGES.rst')
    ),
    keywords='python index match',
    author='Grzegorz Sliwinski',
    author_email='g.sliwinski@clearcode.cc',
    url='https://github.com/ClearcodeHQ/matchbox',
    license="MIT License",
    classifiers=[
        'Development Status :: 1 - Planning',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: GNU Lesser General Public License v3 (LGPLv3)',
        'Natural Language :: English',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ],
    package_dir = {'': 'src'},
    packages=find_packages('src'),
    install_requires=requirements,
    tests_require=test_requires,
    test_suite='tests',
    include_package_data=True,
    zip_safe=False,
    extras_require=extras_require,
)
