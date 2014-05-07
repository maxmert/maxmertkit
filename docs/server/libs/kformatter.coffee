exports.kFormatter = ( num ) ->
    if num > 999999
        (num/1000000).toFixed(1) + 'M'
    else
        if num > 999
            (num/1000).toFixed(1) + 'K'
        else
            num
