function findEmailDomain(address) {
    const domain = address.match(/([a-z0-9\-]+\.){1,2}[a-z]{2,4}/ig)
    return domain[domain.length - 1]
}