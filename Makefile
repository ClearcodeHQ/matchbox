requirements:
	pip install -r requirements-lint.txt

test:
	py.test

benchmark:
	py.test --cov benchmarks benchmarks/
