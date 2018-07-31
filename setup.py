#!/usr/bin/env python
# Copyright (C) 2015 by Clearcode <http://clearcode.cc>
# and associates (see AUTHORS).

# This file is part of matchbox.

# matchbox is free software: you can redistribute it and/or modify
# it under the terms of the GNU Lesser General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# matchbox is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Lesser General Public License for more details.

# You should have received a copy of the GNU Lesser General Public License
# along with matchbox.  If not, see <http://www.gnu.org/licenses/>.
"""matchbox's installation module."""

import os
from setuptools import setup, find_packages

here = os.path.dirname(__file__)


def read(fname):
    """
    Read filename.

    :param str fname: name of a file to read
    """
    return open(os.path.join(here, fname)).read()


requirements = []

test_requires = [
    'pytest==3.7.0',
    'pytest-cov==2.5.1',
    'pytest-benchmark==3.1.1',
]

extras_require = {
    'docs': ['sphinx'],
    'tests': test_requires
}

setup(
    name='matchbox',
    version='0.3.0',
    description=(
        'Abstraction layer for creating hash maps to speed up extracting' +
        ' subsets out of objects in collection'
    ),
    long_description=(
        read('README.rst') + '\n\n' + read('CHANGES.rst')
    ),
    keywords='python index match',
    author='Grzegorz Sliwinski',
    author_email='g.sliwinski@clearcode.cc',
    url='https://github.com/ClearcodeHQ/matchbox',
    license="LGPLv3+",
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: GNU Lesser General Public License v3 or later (LGPLv3+)',
        'Natural Language :: English',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ],
    package_dir={'': 'src'},
    packages=find_packages('src'),
    install_requires=requirements,
    tests_require=test_requires,
    test_suite='tests',
    include_package_data=True,
    zip_safe=False,
    extras_require=extras_require,
)
