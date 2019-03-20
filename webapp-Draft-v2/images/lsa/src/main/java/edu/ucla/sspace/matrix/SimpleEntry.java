/*
 * Copyright 2009 David Jurgens
 *
 * This file is part of the S-Space package and is covered under the terms and
 * conditions therein.
 *
 * The S-Space package is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 as published
 * by the Free Software Foundation and distributed hereunder to you.
 *
 * THIS SOFTWARE IS PROVIDED "AS IS" AND NO REPRESENTATIONS OR WARRANTIES,
 * EXPRESS OR IMPLIED ARE MADE.  BY WAY OF EXAMPLE, BUT NOT LIMITATION, WE MAKE
 * NO REPRESENTATIONS OR WARRANTIES OF MERCHANT- ABILITY OR FITNESS FOR ANY
 * PARTICULAR PURPOSE OR THAT THE USE OF THE LICENSED SOFTWARE OR DOCUMENTATION
 * WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER
 * RIGHTS.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

package edu.ucla.sspace.matrix;


/**
 * A basic implemention of {@link MatrixEntry}.
 *
 * @see MatrixIO#getIterator(File,MatrixIO.Format)
 */
class SimpleEntry implements MatrixEntry, java.io.Serializable {

    private static final long serialVersionUID = 1L;

    private final int row;
    private final int column;
    private final double value;

    public SimpleEntry(int row, int column, double value) {
        this.row = row;
        this.column = column;
        this.value = value;
    }

    /**
     * {@inheritDoc}
     */
    public int column() {
        return column;
    }

    /**
     * {@inheritDoc}
     */
    public int row() {
        return row;
    }
    
    /**
     * {@inheritDoc}
     */
    public double value() {
        return value;
    }
    
    public String toString() {
        return "(" + row + "," + column + ":" + value + ")";
    }
}